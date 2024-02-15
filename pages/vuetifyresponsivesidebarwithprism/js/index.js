const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()

const app = createApp({
    computed: {
      mobile() {
        return  this.$vuetify.display.xs || this.$vuetify.display.sm
      },
    },
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Page 1', content: `

<p class="text"> Javascript: </p>
<pre class="language-js">
<code class="language-js">
function example(a, b) {
  console.log("example!);
}
</code>
</pre>`},
          { title: 'Page 2', content:`

<p class="text"> CSS: </p>
<pre class="language-css">
<code class="language-css">
  .example {
    color: #fff;
  }
</code>
</pre>         
          ` },
          { title: 'Page 3', content:`` },
        ],
        contentContainer: ``
      }
    },
    methods:{
      displayContent(content){
        this.contentContainer = content;

          this.$nextTick(() => {
            // Make sure Prism.highlightAll() is accessible. It should be if Prism.js is correctly included in your project.
            Prism.highlightAll();
          });
      }
    }
  })
app.use(vuetify).mount('#app')
