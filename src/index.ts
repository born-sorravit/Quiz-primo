export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const mergedCollection: number[] = [];
  let i = 0;
  let j = collection2.length - 1;
  let k = 0;

  // นำ collection1 และ collection2 มาเรียงกัน
  while (i < collection1.length && j >= 0) {
    if (collection1[i] <= collection2[j]) {
      mergedCollection[k++] = collection1[i++];
    } else {
      mergedCollection[k++] = collection2[j--];
    }
  }

  // หากมีตัวเลขใดที่เหลือจากการ loop ใน collection1 ให้ copy ไปใน mergedCollection
  while (i < collection1.length) {
    mergedCollection[k++] = collection1[i++];
  }

  // หากมีตัวเลขใดที่เหลือจากการ loop ใน collection2 ให้ copy ไปใน mergedCollection
  while (j >= 0) {
    mergedCollection[k++] = collection2[j--];
  }

  // นำ collection3 มาเรียงต่อกับ mergedCollection
  for (let index = 0; index < collection3.length; index++) {
    mergedCollection.push(collection3[index]);
  }

  return mergedCollection;
}
