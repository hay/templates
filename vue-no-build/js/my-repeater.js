export default {
    props : {
        message : {
            required : true,
            type : String
        },

        times : {
            required : true,
            type : Number
        }
    },

    template : `
        <ul class="my-repeater">
            <li v-for="index in times">
                #{{index}}: {{message}}
            </li>
        </ul>
    `
};