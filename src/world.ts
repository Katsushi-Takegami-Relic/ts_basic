export default class World {
  massage: string

  constructor(message: string) {
    this.massage = message
  }

  public sayHello(elem: HTMLElement | null) {
    if (elem)　{
      elem.innerText = this.massage
    }
  }
}
