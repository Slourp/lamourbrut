import RepositoryQuery from './RepositoryQuery'

class FetchProductDetailsQuery extends RepositoryQuery {
  constructor(repositoryStrategy, productId) {
    super(repositoryStrategy)
    this.productId = productId
  }

  async execute() {
    return this.repositoryStrategy.fetchProductDetails(this.productId)
  }
}

export default FetchProductDetailsQuery
