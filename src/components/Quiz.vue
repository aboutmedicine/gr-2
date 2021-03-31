<template>

  <div class="quiz">

    <div class="row">
        <h4 class="quiz-title"> {{ this.question }} </h4>
    </div>


        <div class="list-group" id="list-tab" role="tablist">
          <form class="" action="" method="post" >
            <a class="list-group-item list-group-item-action active" data-toggle="list"> {{ this.answers[0]}}</a>
            <a class="list-group-item list-group-item-action" data-toggle="list"> {{ this.answers[1]}}</a>
            <a class="list-group-item list-group-item-action" data-toggle="list">{{ this.answers[2]}}</a>
            <a class="list-group-item list-group-item-action"  data-toggle="list">{{ this.answers[3]}}</a>
            <br>
            <input class="btn btn-primary" type="submit" value="Submit">
          </form>
      </div>
  </div>

</template>

<script>

    export default {
        name: 'Quiz',
        data() {
            return {
                question: this.Question,
                answers: this.Answers
            }
        },
        props: ["Question", "Answers"]
    }

</script>

<style scoped>

.quiz-title {
  padding: 15px;
}
  .quiz {
    padding: 60px 0px;
  }

  form {
    width: 100%;
    text-align: left;
  }
  input {
    width: 15%;
  }

  @media (max-width: 768px) {

  input {
    width: 100px;
  }
  .quiz {
    padding: 10px 0px;
  }
}
</style>
