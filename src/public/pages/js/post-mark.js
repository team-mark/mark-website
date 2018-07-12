const markEndpoint = MS_URL + '/api/marks'

const hash = localStorage.getItem('mark-passwordh')

const postMark = new Vue({
    el: '#post-mark',
    data: function () {
        return {
            postBody: "",
        }
    },
    methods: {
        post: function (message, event) {


            const requestBody = {
                body: this.postBody,
                passwordh: hash,
            }
            console.log('submit mark', requestBody)
            this.$http.post(markEndpoint, requestBody)
                .then(function (response) {

                    console.log('post response')
                    console.log(response)
                    this.response = response.body;

                    if (response.status === 200) {
                        // get body data
                        localStorage.setItem('mark-access-token', this.response.token);
                        console.log('token saved');
                        console.log('login end')
                        window.location = '/';
                    } else {
                        console.log('invalid login')
                        // window.location = '/login';
                    }
                },
                    function (error) {
                        console.log('post error')
                        // error callback
                        console.log(error)
                    });
        }
    }
})
