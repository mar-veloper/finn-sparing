# VG Lab Spareløsninger

> A platform to help you choose a savings solution best for your need.

## Getting Started

First, clone the project:

```
git clone git@github.com:mar-veloper/sparelosning.git sparelosninger
```

Then, open the project and run the development server:

```bash
cd sparelosninger
pnpm run dev
```

or

```bash
cd sparelosninger
pnpm run build
pnpm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main Idea

The main idea is to creating a savings solutions platform to help narrow down the number of products and show only those that are relavant for a specific user. Secondly is presenting the data in more concise and fun way by showing graphs and numbers that users are actually more intersted in. Third and most important is to help create a platform for user to calculate possible returns, growth of fund put into savings account and help them find the best solution to achieve their savings goal.

> Note: This is just an idea, I have no exprience in finance so I don't know what allowed and not. :warning:

## Thoughts in process

It was a very challenging task since there's no actual task given but more of like what I can do with the resources I have recieved. The most time-consuming aspect was navigating through the data, comprehending its intricacies, and devising creative ideas to transform it into meaningful outcomes. But overall it was very fun :)

## Thinking process

Since I have little to no experice in finance, I just tried to come up with something I can relate or at lease what I would want if I'm going to look for savings solutions. So here's how I come up with the idea:

> P.S: I have no idea if there are already existing solutions for the problem I'm listing here.

1. **Problem**: I want to see an actualy data of potential money growth in my savings fund.

   - **Solution**: Show a graph and numbers of calculated data based on details given by user and product chosen.
     Here we can ask the user to provide details that could impact the calculation like: Deposit, Monthly saving fee, age, etc...

2. **Problem**: I need help to achieve my savings goal in certain amount of time.

   - **Solution**: _Given that the user has provided the data we need_: Develop the logic for calculating and sorting products, prioritizing the fastest solutions to achieve a savings goal within a specified timeframe.

## Development process

I'm in dilemma on which area I should focus on because I'm afraid I will not be able to show something. So in the end, since this is an open for all suggestion, I have decided to create a small MVP of the platform.

#### Steps I have taken into development

1. Convert XML to JSON
2. Clean up the data in JSON file so I'll able to understand it better
3. Planned on how I will structure the project
   - Which tech to use? In this case I'll go where I'm most comfortable to use which is NEXT JS.
   - Notable Tools?: In styling I used Tailwind with DaisyUI for faster UI development. You may find it weird on why I have Material UI as well... Hehehe I didn't have so much time and I needed multi range slider for **Age Filter**, so I just install all the help I can.
   - Recharts on graph
4. In **Coding**, I started on styling the products and on how I should render them. This was also challenging because I have to think of ways to present it in an interesting way. (I don't know if I have achieved it).
5. Create the steps form when user first visit the page (_Homepage_)
6. Create the filters
7. Create the filter logic.
   - In this part I got stuck because there's a lot of data in 1 json file so it takes a lot of time to do filtering even for just 1 filter.
   - **Solition I came up with?**: To create a seperated JSON files for some filters. So it works just like Data Caching but I did it manually hehe.
   - The filtering has taken so much time in the process, and since I can already show the ideas I had with filters, I left it and move on to the next task.
8. Added the Graph, Stats Number and product details when you click "Les mer ->" in specific data
   - Due to lack of time, most of the data here is dummy data and not dynamic.

#### Structure and practices

The structure and practices I used here, is the usual approach I do when I'm building an MVP with short amout of time. As much as possible I don't want to over engineer things but at the same time I always try my best to write maintanable, scalable and easy to read code. Some things you might notice:

- I have tried my best While I've put effort into ensuring code readability, time constraints may have resulted in some repetitive sections. Nevertheless, in the MVP stage, flexibility and reusability take precedence.
- I've encapsulated each feature within its designated folder. Files, functions, and components are kept within the feature folder until their reuse becomes necessary.
- I may not have time to create a fully reusable elements/components, I've focused on developing reusable features, such as the filters components.

Doing such helps me avoid over engineering the project.

#### If I have time?

Time is my number one enemy here, but I give no excuses. But if I have more time I for sure would change some and add more features.

1. What if I have a bit more of a time:
   - I would love to finish the **filter functions**. I was thinking of creating a middleware or pipeline since there's a lot of filterings. **Currying technique** could solve this problem for better algorithm and faster filtering.
   - I would also be very interesting in creating the **logic in calculating** the data to show the user such as potential returns and savings goal.

#### Things that could make the platform better

1. AI instead of form step? So user can just describe what they want instead of having multiple steps of form.
2. Form validation (I might use Zod here)
3. Search input
4. Login? So user can leave ratings/feedback on each product
5. Finish the compare products page
6. More and much better/fun charts for data representation

### Conclusion

This was fun and challenging task and I hope you like the solution I came up with. 🤓
