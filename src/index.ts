/**
 * Calculates the number of edits to get from input1 to input2 where an edit is
 * one of:
 *
 * 1. Add a character;
 * 2. Delete a character; or,
 * 3. Replace a character.
 *
 * @param input1
 * @param input2
 */
export const editDistance = (input1 = '', input2 = '') => {
  const s1 = input1.toLowerCase();
  const s2 = input2.toLowerCase();
  const dp: number[] = [];
  for (let i = 0; i <= s1.length; i++) dp.push(i);

  for (let j = 0; j < s2.length; j++) {
    let remember = dp[0];
    dp[0] = j + 1;
    for (let i = 0; i < s1.length; i++) {
      const next =
        s1[i] === s2[j]
          ? remember
          : 1 +
            Math.min(
              dp[i], // add a character
              dp[i + 1], // delete a charcter
              remember, // replace a character
            );
      remember = dp[i + 1];
      dp[i + 1] = next;
    }
  }

  return dp[dp.length - 1];
};

/**
 * When given an object and a target string, returns the [first] value with the
 * key that is the least distance from the target string.
 *
 * @param obj
 * @param target
 */
export default function closest(obj: any, target: string) {
  let minDistance = Infinity;
  let minValue;

  Object.keys(obj).forEach(key => {
    const dist = editDistance(key, target);
    if (dist < minDistance) {
      minDistance = dist;
      minValue = obj[key];
    }
  });

  return minValue;
}
