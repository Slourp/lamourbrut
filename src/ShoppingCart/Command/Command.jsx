export default class Command {
  constructor(execute, undo) {
    this.execute = execute
    this.undo = undo
  }
}
