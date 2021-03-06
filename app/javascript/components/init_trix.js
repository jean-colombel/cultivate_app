import TrixEmbedController from './trix_embed_controller'
import "trix/dist/trix.css"
const embedBtnSnippet = (element) => {
  return `
  <div data-behavior="embed_container">
    <div class="d-flex justify-content-center align-items-center mt-2 link_to_embed link_to_embed--new">
      Would you like to embed media from this site?
      <input type="button" class="btn-sm border border-dark rounded btn-muted ml-3" data-behavior="embed_url" value="Embed!">
    </div>
  </div>
  `;
}
const insertBtnSnippet = (editor) => {
  const embedContainer = editor.toolbarElement.querySelector("[data-behavior='embed_container']");
  if (embedContainer === undefined || embedContainer === null){
    editor.toolbarElement.querySelector(".trix-dialogs .trix-dialog--link").insertAdjacentHTML("beforeend", embedBtnSnippet());
  }
}
const initTrix = () => {
  document.addEventListener("trix-initialize", (event) => {
    insertBtnSnippet(event.target);
    new TrixEmbedController(event.target);
  })
}
export { initTrix }
