const { reactive } = Vue;
const reviewForm = {
    template: 
    //html
    `
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Leave a Review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="form.name" placeholder="Enter your name">
            
            <label for="review">Review:</label>
            <textarea id="review" v-model="form.review"></textarea>
            
            <label for="rating">Rating:</label>
            <select id="rating" v-model="form.rating">
                <option disabled value="">Please select one</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <br/>
            <label for="recommend">Would you recommend this product?</label>
            <select id="recommend" v-model="form.recommend">
                <option disabled value="">Please select one</option>
                <option>Yes</option>
                <option>No</option>
            </select>

            <input class="button" type="submit" value="Submit">
        </form>
    `,
    setup(props, { emit }) {
        const form = reactive({
            name: '',
            review: '',
            rating: null,
            recommend: ''
        })
        function onSubmit() {
            if (form.name === '' || form.review === '' || form.rating === null || form.recommend === '') {
                alert('Review is incomplete. Please fill out all fields.');
                return;
            }
            const productReview = {
                name: form.name,
                review: form.review,
                rating: form.rating,
                recommend: form.recommend
            }
            emit('review-submitted', productReview);
            form.name = '';
            form.review = '';
            form.rating = null;
            form.recommend = '';
        }
        return {
            form,
            onSubmit
        }
    }
}