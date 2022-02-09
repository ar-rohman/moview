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
            type: [Array, String],
            default: '',
        },
    },
    render() {
        const getPath = () => {
            const path = [];
            const draw = icons[this.name].split('|');
            const color = Array.isArray(this.color) ? this.color : this.color.split(',');
            if (color.length !== draw.length) {
                return console.error('Please provide the right number of colors!');
            }
            for (const [i, d] of draw.entries()) {
                const clasees = color[i] ? `class="${color[i]}"` : '';
                path.push(`<path d="${d}" fill="${this.fill}" ${clasees} />`);
            }
            return path;
        };
        const svgAttrs = {
            xmlns: this.xmlns,
            viewBox: this.viewBox,
            class: `${this.size}`,
            innerHTML: getPath(),
        };
        return h('svg', svgAttrs);
    },
};
</script>
