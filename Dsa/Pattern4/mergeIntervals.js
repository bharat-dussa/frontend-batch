/**
 * The function `mergeIntervals` takes an array of intervals, merges overlapping intervals, and returns
 * the merged intervals.
 * @param intervals - The `intervals` parameter in the `mergeIntervals` function is an array of arrays,
 * where each inner array represents an interval with two elements: the start and end points of the
 * interval. For example, `[[1, 3], [2, 6], [8,
 * @returns The `mergeIntervals` function returns an array of merged intervals after combining
 * overlapping intervals.
 */
function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    if (last[1] >= current[0]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
}

console.log(
  "mergeIntervals",
  mergeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
  ])
);
