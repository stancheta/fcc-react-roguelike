# FCC-React-Roguelike-Game

##Install##

In order to start using this project, you can either clone it or download it as
a zip file. After which, you need to install the dependencies of the project.

Acquire node from the [Node.js website](https://nodejs.com/en/).

Install the node_modules dependencies with `npm install`

## How to Use

npm scripts:
`npm start` will start up a webpack server for developing a front end react app.

`npm run build` will build the project and place the files in a `public` folder.

`npm run serve` will serve whatever is in the `public` folder on `localhost:8080` with an express server.

`npm prod` will build and then serve the project.

## Project Description

FreeCodeCamp has a series of projects with increasingly complex [requirements](https://www.freecodecamp.com/challenges/build-a-roguelike-dungeon-crawler-game).
This project uses React and SASS to create a roguelike dungeon crawler game.

### Requirements
1. I have health, a level, and a weapon. I can pick up a better weapon. I can pick up health items.
2. All the items and enemies on the map are arranged at random.
3. I can move throughout a map, discovering items.
4. I can move anywhere within the map's boundaries, but I can't move through an enemy until I've beaten it.
5. Much of the map is hidden. When I take a step, all spaces that are within a certain number of spaces from me are revealed.
6. When I beat an enemy, the enemy goes away and I get XP, which eventually increases my level.
7. When I fight an enemy, we take turns damaging each other until one of us loses. I do damage based off of my level and my weapon. The enemy does damage based off of its level. Damage is somewhat random within a range.
8. When I find and beat the boss, I win.
9. The game should be challenging, but theoretically winnable.

### Technologies Used:
+ HTML5
+ SASS
+ Javascript
+ React
+ [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)

### Live Demo
Coming Soon
