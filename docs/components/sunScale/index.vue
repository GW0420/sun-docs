<template>
  <div class="scale">
    <div class="scale-star">
      <button class="btn">
        <svg
          id="github"
          viewBox="0 0 24 24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#0092E4"
          height="40"
          width="40"
        >
          <path
            d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="scale-button">
      <div class="button" @click="onScaleLeftClick">缩小</div>
      <div class="button" @click="onScaleRightClick">放大</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import pkg from "@gw0420/hooks"

const { useScale } = pkg.hooks
const scaleDeg = ref(1.0)
const onScaleLeftClick = () => {
  if (scaleDeg.value < 0.3) return
  scaleDeg.value -= 0.1
  useScale(".btn", scaleDeg.value)
  console.log("left")
}
const onScaleRightClick = () => {
  if (scaleDeg.value > 2.0) return
  scaleDeg.value += 0.1
  useScale(".btn", scaleDeg.value)
  console.log("right")
}
</script>

<style lang="scss" scoped>
.scale {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  user-select: none;
}
.scale-star {
  z-index: 99999;
  height: 150px;
  .btn {
    height: 120px;
    width: 120px;
    display: grid;
    place-items: center;
    background: #e3edf7;
    padding: 1.4em;
    border-radius: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: transform 0.5s;
  }

  .btn:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
      -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(0.5em);
  }

  .btn svg {
    transition: transform 0.5s;
  }

  .btn:hover svg {
    transform: scale(0.9) scale(360deg);
    fill: #333333;
  }
}
.scale-button {
  display: flex;
  gap: 16px;
  .button {
    position: relative;
    padding: 6px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: rgba(124, 42, 232, 0.8);
    transition: all 0.2s ease;
  }

  .button:active {
    transform: scale(0.96);
  }

  .button:before,
  .button:after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
  }

  .button:hover:before {
    top: -70%;
    background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
      radial-gradient(circle, #7d2ae8 20%, transparent 20%), radial-gradient(circle, #7d2ae8 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
      radial-gradient(circle, #7d2ae8 20%, transparent 20%), radial-gradient(circle, #7d2ae8 20%, transparent 20%),
      radial-gradient(circle, #7d2ae8 20%, transparent 20%), radial-gradient(circle, #7d2ae8 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
    background-position: 50% 120%;
    animation: greentopBubbles 0.6s ease;
  }

  @keyframes greentopBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
    }

    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
    }

    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  .button:hover::after {
    bottom: -70%;
    background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
      radial-gradient(circle, #7d2ae8 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
      radial-gradient(circle, #7d2ae8 20%, transparent 20%), radial-gradient(circle, #7d2ae8 20%, transparent 20%),
      radial-gradient(circle, #7d2ae8 20%, transparent 20%), radial-gradient(circle, #7d2ae8 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
    background-position: 50% 0%;
    animation: greenbottomBubbles 0.6s ease;
  }

  @keyframes greenbottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
    }

    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
    }

    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
}
</style>
