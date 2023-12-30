<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let countdown: number;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let hasFinish = false;

  // Replace this with your target date
  const targetDate: Date = new Date("2024-07-05T19:00:00");

  function calculateTimeRemaining(): void {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();
    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

  function updateCountdown(): void {
    calculateTimeRemaining();

    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      hasFinish = true;
      clearInterval(countdown);
    }
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
  class="flex border-solid border-4 pb-2 pt-4 border-pink-custom md:px-12 sm:pt-8 sm:pb-6 justify-between text-pink-custom bg-white"
>
  {#if hasFinish}
    <p>Es hoy</p>
  {:else}
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{days}</span>
      <span class="text-lg md:text-xl sm:mt-4">days</span>
    </div>
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{hours}</span>
      <span class="text-lg md:text-xl sm:mt-4">hours</span>
    </div>
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{minutes}</span>
      <span class="text-lg md:text-xl sm:mt-4">minutes</span>
    </div>
    <div class="inline-flex flex-initial flex-col items-center w-24">
      <span class="text-2xl md:text-6xl">{seconds}</span>
      <span class="text-lg md:text-xl sm:mt-4">seconds</span>
    </div>
  {/if}
</div>

<style>
</style>
