import RepositoryQuery from './RepositoryQuery'

class FetchAllProductsQuery extends RepositoryQuery {
  async execute() {
    return this.repositoryStrategy.fetchAllProducts()
  }
}

export default FetchAllProductsQuery
