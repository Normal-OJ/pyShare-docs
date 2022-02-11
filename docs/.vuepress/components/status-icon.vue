<template>
  <div
    :style="{
      display: 'inline-block',
      marginRight: '8px',
      height: '10px',
      width: '10px',
      border: '1px solid #ccc',
      borderRadius: '100%',
      ...statusStyle,
    }"
  ></div>
</template>

<script>
export default {
  // n: not, a: ac, w: wa, p: pending
  props: ['s'],
  data: (props) => {
    const bg = {
      'n': 'transparent',
      'a': '#009688',
      'w': '#D32F2F',
      'p': '#9E9E9E',
    }
    const bd = {
      'n': '#9E9E9E',
      'a': '#009688',
      'w': '#D32F2F',
      'p': '#9E9E9E',
    }
    return {
      statusStyle: {
        backgroundColor: bg[props.s],
        borderColor: bd[props.s],
      },
    }
  },
}
</script>

