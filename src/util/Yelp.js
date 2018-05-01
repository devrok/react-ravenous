const apiKey = "PgZmKQS8LMeed19Z80gYwPtFlgRFlTr2uceLbXAFMALc0iNzOdVQc6jvwmblFyHKHJ_yTno-lU7v4IMY0mELaX9oMpP5p101AlTzBwVT8x9pLbtlvaEyPOw7k4joWnYx";

const Yelp = {
  search(term, location, sortBy) {
    // to make this work properly
    // ALL THE PARAMETERS MUST BE SET!! IF NOT, IT WOULD BE A BAD REQUEST!!
    const searchUrl = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const urlToFetch = `https://cors-anywhere.herokuapp.com/${searchUrl}`;

    return fetch(urlToFetch, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      if (response.ok) {
        let jsonResponse = response.json();
        console.log(jsonResponse);

        return jsonResponse;
      }

      throw new Error("Request failed");
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    if (jsonResponse.businesses) {
      let newBusinessesArray = jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));

      console.log(newBusinessesArray);

      return newBusinessesArray;
    }
  });
  }
}

export default Yelp;
