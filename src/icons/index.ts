import { createApp } from 'vue'
import SvgIcon from '@/components/svgIcon/index.vue' // svg component

const requireAll = function (requireContext:any) {
  return Object.values(requireContext);
};

const req = import.meta.globEager("./svg/*.svg");

requireAll(req)

export default function(app:any) {
  app.component('SvgIcon', SvgIcon)
}
