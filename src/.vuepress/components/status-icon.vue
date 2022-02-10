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
  // n: not, a: ac, w: wa
  props: ['s'],
  data: (props) => {
    const statusStyle = {
      backgroundColor: props.s === 'n' ? 'transparent' : props.s === 'a' ? '#009688' : '#D32F2F',
      borderColor: props.s === 'n' ? 'ccc' : props.s === 'a' ? '#009688' : '#D32F2F',
    }
    return {
      statusStyle,
    }
  },
}
</script>

