import { useRef, useCallback, useEffect } from "react";

export const useTimeout = () => {
  const timerRef = useRef(null)

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startTimer = useCallback((callback, delay) => {
    stopTimer()
    timerRef.current = setTimeout(callback, delay)
  }, [stopTimer])

  return { timerRef, stopTimer, startTimer }
}

export const useConditionTimeout = ({ cancelAction, delay, checkCanStop }) => {
  const { startTimer, stopTimer } = useTimeout()

  useEffect(() => {
    if (checkCanStop()) {
      stopTimer()
    }
  }, [checkCanStop, stopTimer])

  useEffect(() => {
    startTimer(() => cancelAction(), delay)

    return stopTimer
  }, [cancelAction, startTimer, stopTimer, delay])
}

/*
const { count, increment, decrement, set, reset } = useCount()
const checkCanStopTimer = useCallback(() => count > 3, [count])

useConditionTimeout({
  cancelAction: reset,
  delay: 5000,
  checkCanStop: checkCanStopTimer,
})
*/
