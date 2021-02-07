const searchButton = document.getElementById('search')
const inputFoodName = document.getElementById('name')

const grabIngredients = function (ingredienOne, ingredienTwo, ingredienThree, ingredienFour, ingredienFive, ingredienSix, ingredienSeven, ingredienEight, ingredienNine, ingredienTen, ingredienEleven, ingredienTwelve, ingredienThirteen, ingredienFifteen, ingredienSixteen, ingredienSeventeen, ingredienEightteen, ingredienNineteen, ingredienTwenty) {

    let ingredients = [ingredienOne, ingredienTwo, ingredienThree, ingredienFour, ingredienFive, ingredienSix, ingredienSeven, ingredienEight, ingredienNine, ingredienTen, ingredienEleven, ingredienTwelve, ingredienThirteen, ingredienFifteen, ingredienSixteen, ingredienSeventeen, ingredienEightteen, ingredienNineteen, ingredienTwenty]

    let ingredientsString;

    ingredientsString = ingredients.filter((item) => item)

    return ingredientsString
}

const detailViewDom = function (arr) {
    const list = document.createElement('div')
    const header = document.createElement('h5')
    const orderedList = document.createElement('ul')
    const headerValue = "Ingrediens:"
    
    header.innerHTML = headerValue
    list.appendChild(header)
    list.style.paddingLeft = '25px'
    for (let i = 0; i < arr.length; i++) {
        const listElement = document.createElement('li')

         listElement.appendChild(document.createTextNode(arr[i]))
         orderedList.appendChild(listElement)
         list.appendChild(orderedList)
    }
    return list
}

const generateDom = (mealName, mealThumb, ingrediens) => {
    const foodElement = document.createElement('div')
    const foodName = document.createElement('h5')
    const foodImage = document.createElement('img')
    const grabIngrediens = detailViewDom(ingrediens)
    
    foodImage.src = mealThumb
    foodImage.style.width = '75%'
    foodImage.style.margin = '10px'
    foodImage.style.paddingLeft = '50px'
    foodName.innerText = mealName
    foodName.style.textAlign = 'center'
    foodName.style.paddingBlockEnd = '12px'
    foodElement.style.backgroundColor = '#F0F0F0'
    foodElement.style.borderRadius = '8px'
    foodElement.appendChild(foodImage)
    foodElement.appendChild(foodName)
    foodImage.addEventListener('click', () => {
        foodElement.appendChild(grabIngrediens) 
    })

    return foodElement
}

const errorDom = function () {
    errorheader = document.createElement('h1')
    errorheader.innerHTML = 'Query Not Found'
    document.getElementById('food-content').appendChild(errorheader)
}



searchButton.addEventListener('click', () => {
    const searchItem = inputFoodName.value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        let ingredientArray  = []
        for(let i = 0; i < data.meals.length; i++) {
            ingredientArray.push(data.meals[i])
        }
        document.getElementById('food-content').innerHTML = ""
        for (let i = 0; i < ingredientArray.length; i++) {
            document.getElementById('food-box').style.display = 'flex'
            document.getElementById('food-box').style.justifyContent = 'center'
            let ingredientString =  grabIngredients(
                                    ingredientArray[i].strIngredient1, 
                                    ingredientArray[i].strIngredient2, 
                                    ingredientArray[i].strIngredient3,
                                    ingredientArray[i].strIngredient4,
                                    ingredientArray[i].strIngredient5,
                                    ingredientArray[i].strIngredient6,
                                    ingredientArray[i].strIngredient7,
                                    ingredientArray[i].strIngredient8,
                                    ingredientArray[i].strIngredient9,
                                    ingredientArray[i].strIngredient10,
                                    ingredientArray[i].strIngredient11,
                                    ingredientArray[i].strIngredient12,
                                    ingredientArray[i].strIngredient13,
                                    ingredientArray[i].strIngredient14, 
                                    ingredientArray[i].strIngredient15, 
                                    ingredientArray[i].strIngredient16,
                                    ingredientArray[i].strIngredient17, 
                                    ingredientArray[i].strIngredient18, 
                                    ingredientArray[i].strIngredient19, 
                                    ingredientArray[i].strIngredient20
                                  )
            document.getElementById('food-content').appendChild(generateDom(ingredientArray[i].strMeal, ingredientArray[i].strMealThumb, ingredientString))
        }
    })
    
    .catch((error) => {
        document.getElementById('food-content').innerHTML = ""
        errorDom()
    })
})















