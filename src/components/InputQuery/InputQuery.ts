import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class TextSearch extends Vue {
  @Prop() private searchInputHandle: any;

  private handleInput(event: any) {
    const value = event.target.value
    this.$emit('searchInputHandle', value)
  }
  private testButton(event: any) {
    this.$emit('handleButton', event)
  }
}