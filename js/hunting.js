// const loadPhone = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data = await res.json();
//     console.log(data);
// }

// loadPhone();


const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    // console.log(phones);
    displayPhones(phones);
}


// handle search btn

const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText)
}

const displayPhones = phones => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = "card bg-gray-100 p-5  bg-base-100 shadow-xl";
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
                    <div class="card-body">
                      <h2 class="card-title text-black">${phone.phone_name}!</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `
        cardContainer.appendChild(phoneCard);

    })
}