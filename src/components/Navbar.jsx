export default function Navbar(params) {
    return (
        <>
         <nav class="navbar navbar-expand-lg bg-light fixed-top">
  <div class="container">
    <a class="navbar-brand">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bob%27s_Burgers_logo.svg/2560px-Bob%27s_Burgers_logo.svg.png" alt="logo" width="120"/>
      <b> Bobs Burger </b>
      <img src="https://www.pngfind.com/pngs/m/36-369794_hamburger-svg-junk-food-burger-icon-png-transparent.png" alt="logo" width="18"/>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active" v-if="isLogin">
          <a class="nav-link" href="#">
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}