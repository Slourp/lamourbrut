class RepositoryCommand {
  constructor(repositoryStrategy) {
    this.repositoryStrategy = repositoryStrategy
  }

  async execute() {
    throw new Error('execute() method must be implemented')
  }
}

export default RepositoryCommand
