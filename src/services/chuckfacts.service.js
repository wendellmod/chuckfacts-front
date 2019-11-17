import ChuckFactsAPI from '@/api/chuckfacts.api'

class ChuckFactsService {
    async getFacts() {
        try {
            const response = await ChuckFactsAPI.getFacts()
            if (response && response.data) {
                return response.data
            }
        } catch (error) {
            throw error
        }
    }
}
export default new ChuckFactsService()