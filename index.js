const store = [
	{
		id: 1,
		title: "sidekix media",
		category: "interior",
		price: 15.99,
		img:
			"https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: "binyamin mellish",
		category: "estate",
		price: 13.99,
		img:
			"https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: "tony magallanes",
		category: "interior",
		price: 6.99,
		img:
			"https://images.pexels.com/photos/3623770/pexels-photo-3623770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: "carl gartham",
		category: "interior",
		price: 20.99,
		img:
			"https://images.unsplash.com/photo-1541604193435-22287d32c2c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxpbnRlcmlvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: "pixabay",
		category: "estate",
		price: 22.99,
		img:
			"https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: "jonathan borba",
		category: "interior",
		price: 18.99,
		img:
			"https://images.unsplash.com/photo-1603111692119-c52e275031bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: "michael warf",
		category: "furniture",
		price: 8.99,
		img:
			"https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: "vecislavas popa",
		category: "furniture",
		price: 12.99,
		img:
			"https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: "terry magallenes",
		category: "interior",
		price: 16.99,
		img:
			"https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () => {
	displayStoreButtons();
	displayStore(store);
});

function displayStore(storeItems) {
	let displayItem = storeItems
		.map((item) => {
			const { title, price, img, category, desc } = item;
			return `<article class="menu-item">
                <img
                    src=${img}
                    alt="${title}"
                    class="photo"
                />
                <div class="item-info">
                    <header>
                        <h4>${title}</h4>
                        <h4 class="price">$${price}</h4>
                    </header>
                    <p class="item-text">${desc}</p>
                </div>
            </article>`;
		})
		.join("");
	sectionCenter.innerHTML = displayItem;
}

function displayStoreButtons() {
	//get only unique category
	const categories = store.reduce(
		(values, item) => {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values;
		},
		["all"]
	);
	const categoryBtns = categories
		.map((category) => {
			return `<button class="filter-btn" type="button" data-id=${category}>
			${category}
			</button>
			`;
		})
		.join("");
	btnContainer.innerHTML = categoryBtns;
	const filterBtns = btnContainer.querySelectorAll(".filter-btn");

	filterBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const category = e.currentTarget.dataset.id;
			const storeCategory = store.filter((item) => {
				if (item.category === category) {
					return item;
				}
			});
			if (category === "all") {
				displayStore(store);
			} else {
				displayStore(storeCategory);
			}
		});
	});
}
