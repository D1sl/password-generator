# Password Generator

## Assignment objectives
Build code that through a series of questions generates a strong password that can contain any alphabetical characters, numbers or special characters.
  
## Challenges
![Screenshot of a bug](/bug.png)

My first instinct was to dump all characters from all categories that the user selected into an array and then randomly pick characters from there. 

The issue with this approach is that there is a uncomfortably moderate probability that the final password, while ordered randomly, would not include characters from a category that the user selected. 

For example, if the user chose only numbers and uppercase characters, the dump array could look like this: "A", "Y", "X", "D", "6", "2", "4", "4", "3". Then, a randomly picked result could be "XYXAA". This would not satisfy the choices the user made as it doesn't include numbers. 

To solve, I had to restructure how the password is generated. 

## Solution to challenge
I created a while loop that repeated for as long as the draft arrays length was shorter than what the user asked for. I then created ifs for each character category and added rules to filter out categories that were not chosen. 

This approach presented a new challenge: the array would repeat the same order in which the IF statements were layed out. Uppercase, Lowercase, Numbers, Special characters. The output was along the lines of: "Ty5%Gi8#". I wanted to eliminate any patterns from the final password, so I wrote a final piece of code at the bottom that reordered these characters into a completely random order. 

In short, I ensured that all requested character categories were represented in the final password and that the final password wouldn't follow any recognizable patterns.

---
## Project links

- [GitHub Repository][1]
- [GitHub Page][2]

[1]: https://github.com/D1sl/password-generator/
[2]: https://d1sl.github.io/password-generator/

---
GitHub: [D1sl](https://github.com/D1sl/) 
