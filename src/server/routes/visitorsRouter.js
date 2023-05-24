const express = require('express')

const router = express.Router()
const { google } = require('googleapis')
const { JWT } = require('google-auth-library')

// Configure Google Analytics API credentials
const keys = require('../../credentials/lamourbrut-ef250b769cda.json')

const auth = new JWT({
  email: keys.client_email,
  key: keys.private_key,
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
})

const analytics = google.analyticsreporting('v4')

// Route to get visitor count
router.get('/visitors', async (req, res) => {
  try {
    const response = await analytics.reports.batchGet({
      auth,
      requestBody: {
        reportRequests: [
          {
            viewId: '5257416561',
            dateRanges: [
              {
                startDate: '2023-05-24', // Date de début souhaitée
                endDate: '2023-05-31', // Date de fin souhaitée
              },
            ],
            metrics: [
              {
                expression: 'ga:users',
              },
            ],
          },
        ],
      },
    })

    const visitorCount =
      response.data.reports[0].data.totals[0].values[0]

    res.json({ count: visitorCount })
  } catch (error) {
    console.error('Error retrieving visitor count:', error)
    res
      .status(500)
      .json({ error: 'Failed to retrieve visitor count' })
  }
})

module.exports = router
