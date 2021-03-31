<template>
    <div class="Signin">
        <main role="main">
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <br /><br />
                            <h3 style="text-align:center"> Sign In </h3>

                            <div class="form-group row">
                                <label for="email" class="col-md-12 col-form-label">Email</label>
                                <div class="col-md-12">
                                    <input id="email" type="email" class="form-control" v-model="email" required autocomplete="email" autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-12 col-form-label">Password</label>
                                <div class="col-md-12">
                                    <input id="password" type="password" class="form-control" v-model="password" required autocomplete="current-password">
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-12">
                                    <button  class="blue-button" @click="login">
                                        Sign In
                                    </button>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <DefaultFooter/>
    </div>
</template>

<script>

    import DefaultFooter from '@/components/DefaultFooter.vue'

    export default {
        name: 'Signin',
        components: {
            DefaultFooter
        },
        data () {
            return {
                vueAppClasses: [],
                email: '',
                password: ''
            }
        },
        watch: {

        },
        methods: {
            login(){
                const data = {
                    email : this.email,
                    password : this.password
                }
                this.$store.dispatch("login", data);
            }
        },
        beforeMount () {

        },
        destroyed () {

        }
    }

</script>

<style scoped>  
    .blue-button{
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
        width: 100%;
        background: #0741ad;
        text-transform: uppercase;
        color: white;
        transition: 400ms;
        display: inline-block;
        border: 0px solid white !important;
    }
    .form-control{
        font-family: "Open Sans" !important;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        display: flex;
        align-items: center;
        color: #828282;
        padding: 10px;
        height: 48px !important;
        background: #ffffff;
        border: 1px solid #eef1f5;
        box-sizing: border-box;
        box-shadow: 0px 1px 3px rgba(238, 241, 245, 0.5);
        border-radius: 4px;
    }

</style>
