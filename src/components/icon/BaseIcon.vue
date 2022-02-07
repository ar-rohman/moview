<script>
import { h } from 'vue';
import icons from './icons';
export default {
    props: {
        xmlns: {
            type: String,
            default: 'http://www.w3.org/2000/svg',
        },
        viewBox: {
            type: String,
            default: '0 0 24 24',
        },
        name: {
            type: String,
            required: true,
        },
        fill: {
            type: String,
            default: 'currentColor',
        },
        size: {
            type: String,
            default: 'h-6 w-6',
        },
        color: {
            type: String,
            default: '',
        },
    },
    render() {
        const svgAttrs = {
            xmlns: this.xmlns,
            viewBox: this.viewBox,
            fill: this.fill,
            class: `${this.size} ${this.color}`,
            innerHTML: icons[this.name],
        };
        return h('svg', svgAttrs);
    },
};
</script>
