import * as Navi from 'navi'

export default Navi.route({
  title: "About BlackBird",
  getView: () => import('./document.mdx'),
})