<template lang="html">

    <b-container fluid="lg">
        <b-row>
            <b-col :key="index" v-for="(item, index) in paginatedItems">
                <div class="card text-center m-3" >
                    <h1 class="card-header"> {{ item.title }}</h1>
                    <div class="card-body">
                        <b-container>
                            <div class="d-flex justify-content-center">
                                <VideoPlayer :topic="item.video" />
                            </div>
                        </b-container>
                        <div class="container">
                            <div class="row" >
                                <div class="col-md-4 pos" :key="i" v-for="(img, i) in item.image">
                                    <ImageStackScroller :region="img.region" :plane="img.plane" />
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg pos">
                                    <Quiz :Question="item.quiz_question" :Answers="item.quiz_answers"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
       
        <b-row>
            <b-col md="6" class="my-1">
                <b-pagination
                @change="onPageChanged"
                :total-rows="totalRows"
                :per-page="perPage"
                v-model="currentPage"
                class="my-0"
                />
            </b-col>
        </b-row>
        <DefaultFooter/>

    </b-container>

</template>

<script>

    import ImageStackScroller from '@/components/ImageStackScroller.vue'
    import VideoPlayer from '@/components/VideoPlayer.vue'
    import Quiz from '@/components/Quiz.vue'
    import DefaultFooter from '@/components/DefaultFooter.vue'
    // import * as axios from 'axios'

    export default {
        name: 'Home',

        components: {
            ImageStackScroller,
            VideoPlayer,
            Quiz,
            DefaultFooter
        },

        data() {
            return {
                scan: 'ctb',
                items: this.$store.state.activeLessons,
                paginatedItems: this.$store.state.activeLessons,
                currentPage: 1,
                perPage: 1,
                totalRows: this.$store.state.activeLessons.length
            }
        },

        computed: {
        },

        methods: {
            paginate(page_size, page_number) {
                let itemsToParse = this.items;
                this.paginatedItems = itemsToParse.slice(
                    page_number * page_size,
                    (page_number + 1) * page_size
                );
            },
            onPageChanged(page) {
                this.paginate(this.perPage, page - 1);
            }
        },
        mounted() {
            this.paginate(this.perPage, 0);
        }
    }

</script>

<style>

  .padded {
    padding: 1rem;
  }

  .unpadded {
    background: #fff;
    margin: -0.7rem 0rem;
  }

  .sample {
    margin: 60px;
  }

  .card-header {
    padding: 20px;
  }

  .pos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
  .sample {
    margin: 0px;
  }

  .lesson-title {
    padding: 0px;
  }
}

</style>
