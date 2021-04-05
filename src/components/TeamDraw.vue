<template>
  <div>
    <flow-form
      ref="flowform"
      @complete="onComplete"
      @submit="onSubmit"
      @step="onStep"
      :questions="questions"
      :language="language"
      :standalone="true"
    >
      <template v-slot:complete>
        <div class="f-section-wrap">
          <p>
            <span class="fh2 text-black">We are about to draw teams 🙌</span>
            <span class="f-section-text text-gray-700">
              You can review your answers or press Generate.
            </span>
          </p>
        </div>
      </template>
    </flow-form>
  </div>
</template>

<script>
import FlowForm, {
  QuestionModel,
  QuestionType,
  ChoiceOption,
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";
export default {
  name: "TeamDraw",
  components: {
    FlowForm,
  },
  data() {
    return {
      language: new LanguageModel({
        ok: "Next",
        pressEnter: "or PRESS ENTER",
        submitText: "Generate",
        successText: "Generating teams....",
      }),
      questions: [
        new QuestionModel({
          id: "name",
          tagline: "Get started by answering few questions. 😊",
          title: "What would be your tournament called?",
          type: QuestionType.Text,
          required: true,
          placeholder: "Some fancy name",
        }),
        new QuestionModel({
          id: "participants_name",
          title: "Write the names of the participants 🎾",
          helpText: "SHIFT + ENTER to go to next line.",
          type: QuestionType.LongText,
          required: true,
          placeholder: "One participant per line",
        }),
        new QuestionModel({
          id: "choose_path",
          tagline: "How should we draw the teams? 🤔",
          title: "By number of Teams or Participants per Team?",
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,

          options: [
            new ChoiceOption({
              label: "Teams",
              value: "no_of_teams",
            }),
            new ChoiceOption({
              label: "Participants",
              value: "no_of_participants",
            }),
          ],
          jump: {
            no_of_participants: "no_of_participants",
          },
        }),
        new QuestionModel({
          id: "no_of_teams",
          title: "How many number of teams there should be?",
          type: QuestionType.Number,
          placeholder: "Can be any number",
          required: true,
          jump: {
            _other: "_submit",
          },
        }),

        new QuestionModel({
          id: "no_of_participants",
          title: "How many number of participants should be in a team?",
          type: QuestionType.Number,
          required: true,
          placeholder: "Can be any number",
          jump: {
            _other: "_submit",
          },
        }),
      ],
    };
  },
  mounted() {
    document.addEventListener("keyup", this.onKeyListener);
  },
  beforeDestroy() {
    document.removeEventListener("keyup", this.onKeyListener);
  },
  methods: {
    onStep(activeQuestionId) {
      this.$emit("next", activeQuestionId);
    },

    onSubmit() {
      this.$refs.flowform.submitted = true;

      setTimeout(() => {
        this.$router.push({
          name: "Teams",
          params: { submittedData: this.getData() },
        });
      }, 300);
    },
    getData() {
      const data = {
        questions: [],
        answers: [],
      };
      this.questions.forEach((question) => {
        if (question.title) {
          let answer = question.answer;
          if (Array.isArray(answer)) {
            answer = answer.join(", ");
          }
          data.questions.push(question.title);
          data.answers.push(answer);
        }
      });
      return data;
    },
  },
};
</script>

<style lang="css">
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css";
@import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css";
</style>
