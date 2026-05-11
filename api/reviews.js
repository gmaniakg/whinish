export default async function handler(req, res) {
  const businessId = "11533882";
  const graphqlUrl = "https://api.place.naver.com/graphql";

  const query = [
    {
      operationName: "getVisitorReviews",
      variables: {
        input: {
          businessId: businessId,
          businessType: "hospital",
          itemPerPage: 10,
          page: 1,
          sort: "LATEST"
        }
      },
      query: `query getVisitorReviews($input: VisitorReviewsInput) {
        visitorReviews(input: $input) {
          items {
            id
            body
            created
            author {
              nickname
              imageUrl
            }
            rating
          }
          total
        }
      }`
    }
  ];

  try {
    const response = await fetch(graphqlUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://pcmap.place.naver.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      body: JSON.stringify(query)
    });

    if (!response.ok) {
      throw new Error(`Naver API error: ${response.status}`);
    }

    const result = await response.json();
    const reviews = result[0].data.visitorReviews.items;

    // Set Cache-Control header for 6 hours (21600 seconds)
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate');
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
