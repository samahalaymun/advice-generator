const generateBtn = document.querySelector(".generate-btn");
const wrapper = document.querySelector(".wrapper .advice");
const init = async () => {
     let advice=""
   advice = await generateAdvice();
   preperHtml(advice);
  generateBtn.addEventListener("click", async () => {
   advice = await generateAdvice();
     preperHtml(advice);
  });
  
};
const generateAdvice = async () => {
  try {
    let response = await fetch("	https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw Error("something went wrong!");
    }
    let advice = await response.json();
    return advice;
  } catch (error) {}
};
init();
const preperHtml = (data) => {
  const { advice, id } = data.slip;
  let html = `
            <div class="advice-title">
          <span>Advice #${id}</span>
        </div>
        <div class="advice-body">
          <p>
            " ${advice}"
          </p>
        </div>
   
   `;
  wrapper.innerHTML = html;
};
