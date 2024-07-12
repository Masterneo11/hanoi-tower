# Towers of Hanoi - Component-Based Architecture

Welcome to the Towers of Hanoi repository! This project implements the classic Towers of Hanoi puzzle using a modern approach with a component-based architecture.

Description

The Towers of Hanoi is a mathematical puzzle consisting of three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks stacked in ascending order of size on one rod, the smallest at the top, making a conical shape. The objective of the puzzle is to move the entire stack to another rod, obeying the following rules:

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
No disk may be placed on top of a smaller disk.
Features

Interactive UI: Drag and drop disks to move them between towers.
Component-Based Architecture: The project is designed with a clear separation of concerns, making it modular and easy to maintain.
Presentation Components: UI components responsible for rendering the interface.
Container Components: Components managing state and logic.
Service Layer: Functions and services handling business logic.
Move Counter: Track the number of moves taken to solve the puzzle.