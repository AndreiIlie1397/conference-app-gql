const { RESTDataSource } = require('apollo-datasource-rest')
class ConferenceApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL
  }

  async getConferenceSuggestions(input) {
    return await this.get('Suggestions/ListOfConference')
  }
}
module.exports = ConferenceApi
