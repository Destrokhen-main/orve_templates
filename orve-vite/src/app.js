import { ref, watch, computed} from 'orve-rxjs'

export default function App() {
  const a = ref([1,2,3]);
  const b = ref(1);

  watch((o,n) => {
    console.log(o,n);
  }, a)

  const A = computed(() => a.value + b.value)

  return (
    <div>
      <button type="button" onClick={() => a.value.push(a.value.length + 1)}>push</button>
      <button type="button" onClick={() => a.value.unshift(a.value.length + 1)}>unshift</button>
      <button type="button" onClick={() => a.value.splice(0,1)}>splice</button>
      <button type="button" onClick={() => a.value[0] = 3}>edit</button>
      {
        a.for((e) => <div>{e}</div>)
      }
    </div>
  )
}