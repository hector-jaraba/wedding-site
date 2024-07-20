<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { useI18n } from "../../utils/i18n.ts";

  export let actualURL;

  const { t } = useI18n(actualURL);

  let countdown: number;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let hasFinish = false;

  // Replace this with your target date
  const targetDate: Date = new Date("2024-07-05T19:00:00");

  function calculateTime(): void {
    const now: Date = new Date();
    let difference: number = targetDate.getTime() - now.getTime();

    if (difference < 0) {
      hasFinish = true;
      difference = Math.abs(difference); // Convert to positive to count forward
    }

    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

  function updateCountdown(): void {
    calculateTime();
  }

  onMount(() => {
    countdown = setInterval(updateCountdown, 1000);
    updateCountdown();
  });

  onDestroy(() => {
    clearInterval(countdown);
  });
</script>

<div
  class="flex flex-col border-solid border-4 pb-2 pt-2 border-pink-custom md:px-12 sm:pt-2 sm:pb-6 text-pink-custom bg-white"
>
  {#if hasFinish}
    <div
      class="w-fit text-center -mt-11 px-4 mb-4 pt-1 bg-pink-custom self-center"
    >
      <span class="text-lg font-lora text-white">{t("countdown.finish")}</span>
    </div>
  {/if}
  <div class="flex justify-between">
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{days}</span>
      <span class="text-lg md:text-xl sm:mt-4">{t("countdown.days")}</span>
    </div>
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{hours}</span>
      <span class="text-lg md:text-xl sm:mt-4">{t("countdown.hours")}</span>
    </div>
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{minutes}</span>
      <span class="text-lg md:text-xl sm:mt-4">{t("countdown.minutes")}</span>
    </div>
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{seconds}</span>
      <span class="text-lg md:text-xl sm:mt-4">{t("countdown.seconds")}</span>
    </div>
  </div>
</div>

<style>
  /* Your styles here */
</style>
