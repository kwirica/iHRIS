<template>
  <ihris-element :edit="edit" :loading="false" v-if="!hide">
    <template #form>
      <v-text-field :error-messages="errors" @change="errors = []" :label="display" :disabled="disabled" :name="field" v-model.number="value" outlined hide-details="auto" :rules="rules" dense>
        <template #label>{{$t(`App.fhir-resources-texts.${display}`)}} <span v-if="required" class="red--text font-weight-bold">*</span></template>
      </v-text-field>
    </template>
    <template #header>
      {{$t(`App.fhir-resources-texts.${display}`)}}
    </template>
    <template #value>
      {{value}}
    </template>
  </ihris-element>
</template>

<script>
import IhrisElement from "../ihris/ihris-element.vue"
import { eventBus } from "@/main";
import { dataDisplay } from "@/mixins/dataDisplay"

export default {
  name: "fhir-decimal",
  props: ["field", "label", "min", "max", "id", "path", "slotProps", "sliceName","base-min","base-max", "edit", "readOnlyIfSet",
    "constraints", "displayCondition", "enableBehavior", "initial"],
  components: {
    IhrisElement
  },
  mixins: [dataDisplay],
  data: function() {
    return {
      source: { path: "", data: {} },
      value: "",
      hiddenVal: "",
      qField: "valueDecimal",
      disabled: false,
      errors: [],
      lockWatch: false
    }
  },
  created: function() {
    if(this.initial && !this.$route.params.id) {
      this.value = this.initial
    }
    //this function is defined under dataDisplay mixin
    this.hideShowField(this.displayCondition, this.enableBehavior)
    this.setupData()
  },
  watch: {
    hide(val) {
      if(val) {
        this.hiddenVal = this.value
        this.value = ""
      } else if(this.hiddenVal) {
        this.value = this.hiddenVal
      }
    },
    slotProps: {
      handler() {
        //console.log("WATCH INTEGER",this.field,this.path,this.slotProps)
        if ( !this.lockWatch ) {
          this.setupData()
        }
      },
      deep: true
    },
    value(val) {
      eventBus.$emit(this.path, val)
    }
  },
  methods: {
    setupData() {
      if ( this.slotProps && this.slotProps.source ) {
        this.source = { path: this.slotProps.source.path+"."+this.field, data: {} }
        if ( this.slotProps.source.fromArray ) {
          this.source.data = this.slotProps.source.data
          this.value = this.source.data
          this.lockWatch = true
          //console.log("SET value to ", this.source.data, this.slotProps.input)
        } else {
          let expression = this.$fhirutils.pathFieldExpression( this.field )
          this.source.data = this.$fhirpath.evaluate( this.slotProps.source.data, expression )
          //console.log("STR FHIRPATH", this.slotProps.source.data, this.field)
          let value = null
          if ( this.source.data.length == 1 ) {
            value = this.source.data[0]
          } else {
            //check if the path is an array and use path index to get value
            let pathSlices = this.path.split("[")
            let index
            for(let slice of pathSlices) {
              let slices = slice.split("]")
              if(Number.isInteger(parseInt(slices[0]))) {
                index = slices[0]
              }
            }
            if(index || index == 0) {
              value = this.source.data[index]
            }
          }
          if ( value != null ) {
            this.value = value
            this.lockWatch = true
          }
        }
        this.disabled = this.readOnlyIfSet && (!!this.value)
        //console.log(this.source)
      }
    }
  },
  computed: {
    index: function() {
      if ( this.slotProps ) return this.slotProps.input
      else return undefined
    },
    display: function() {
      if ( this.slotProps && this.slotProps.input ) return this.slotProps.input.label
      else return this.label
    },
    required: function() {
      return (this.index || 0) < this.min
    },
    rules: function() {
      const num_check = v => {
        //let num = Number(v)
        if(!v) {
          return
        }
        return (!isNaN(v) && /^-?\d+(\.\d+)?$/.test(v)) || this.$t(`App.fhir-resources-texts.${this.display}`)+" " + this.$t(`App.hardcoded-texts.must be a Decimal`)
      }
      let rules = [ num_check ]
      if ( this.required ) {
        rules.push ( v => !!v || this.$t(`App.fhir-resources-texts.${this.display}`)+" " + this.$t(`App.hardcoded-texts.is required`) )
      }
      return rules
    }
  }
}
</script>
