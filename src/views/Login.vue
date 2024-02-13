<template>
  <main>
    <section>
      <header>
        <a href="/login.html">
          <img src="/src/assets/benedict-logo.png" alt="Benedicto Logo" />
        </a>
      </header>

      <div class="form__container">
        <form class="form">
          <div class="flex-column">
            <label>Username </label>
          </div>
          <div class="inputForm">
            <div>
              <svg
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path
                    d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
                  ></path>
                </g>
              </svg>
            </div>
            <input type="text" class="input" placeholder="Username" />
          </div>
          <div class="flex-column">
            <label>Password </label>
          </div>
          <div class="inputForm">
            <div>
              <svg
                height="20"
                viewBox="-64 0 512 512"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
                ></path>
                <path
                  d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
                ></path>
              </svg>
            </div>
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button class="button-submit">Sign In</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  height: 100vh;
  position: relative;
  margin: 0 auto;
  background: url("/src/assets/benedicto.jpeg") bottom/cover no-repeat;
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.397);
}

section {
  position: relative;
  z-index: 999;
}

.form__container {
  margin-top: 5rem;
  display: grid;
  place-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.14);
  border-radius: 16px;

  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);

  padding: 30px;
  width: 450px;
  border-radius: 20px;
}

.form button {
  align-self: flex-end;
}

.flex-column > label {
  color: white;
  font-weight: 600;
}

.inputForm {
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
}

.input {
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 85%;
  height: 100%;

  background-color: transparent;
}

.input:focus {
  outline: none;
}

.inputForm:focus-within {
  border: 1.5px solid #2d79f3;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
}

.button-submit {
  margin: 20px 0 10px 0;
  background-color: #0035ad;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  transition: 100ms ease-in-out;
}

.button-submit:hover {
  background-color: #fe5c00;
  transition: 100ms ease-in-out;
}

.p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}

.btn {
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  border: 1px solid #2d79f3;
}

header {
  padding: 1rem;
}
</style>
