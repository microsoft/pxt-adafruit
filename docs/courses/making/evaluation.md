# Evaluation

Evaluating maker projects can be tough for several reasons. Projects often represent a personal vision and journey, and it can feel wrong to stamp a grade on that experience. Students come with a variety of abilities with coding and making, as well as a different fluencies with tools and techniques. Also, a teacher may want a project to meet particular subject area standards, so those will need to mesh with other criteria. 

One approach is to essentially value process at least as heavily as product. Formative evaluation rather than summative gives the opportunity to reward traits like the ability to reflect, collaborate, problem-solve, and iterate. 

If the teacher wants to encourage growth in students through the process, then helping them develop their ability to reflect on their challenges, improvement, and thinking becomes crucial. Thinking about one’s own thought process, metacognition, opens all kinds of doors to growth. A maker journal or blog can provide opportunity and context to develop those metacognitive skills. Brief daily or weekly quick reflections train the brain to think about its process, and they also provide material for more formal reflections at the end. Quick reflections could take the form of micro blog entries or “exit ticket” style writings in which students offer a few sentences on a hurdle (overcome or not), a dynamic (with a teammate or tool), a goal, or a source frustration or satisfaction. At the end of the project, students can review their process and write or present on it more formally. 

As a teacher, while you develop a set of goals, be sure to capitalize on your students’ knowledge as they gain it. This approach sets them up for the deeper kinds of growth maker projects can bring.

For example, if a student or team has figured out how to code or build something, I might say, “Hey, Javier and Laura over there are struggling with this same thing. Could you go over and advise them? Be sure to help with talking, not doing, though.” 

From the teacher’s perspective, there are a few noteworthy things how happening here. For one, I’m freed up from helping Javier and Laura and can do other things. Javier and Laura are being coached by a peer, which can feel more relevant and accessible than being coached by the teacher. Ally, the coach, may be benefiting the most. She’s now a coach, an imparter of wisdom. However, the stipulation that she help verbally, with talking not doing, means that she will be drawn upon to employ both empathy and metacognition. She will need to understand why Javier and Laura are blocked, and she will need to be able to think about her own thinking in order to explain it and talk them through it. All three students will have a meaningful interaction to reflect upon in writing. 

## Ideas for rubric guidelines

A project and unit’s rubric might have categories like the ones that follow. Each category has guideliness suggesting ways a student might demonstrate the core trait, and the teacher can assign a weighted point system or base a narrative evaluation on the rubric.

### Citizenship

* Gave effective verbal help to a classmate
* Asked for / thanked someone for assistance
* Offered to share materials
* Offered compassion or support
* Thowed leadership in organizing a group, appropriately directing others, delegating responsibility, praising contributions
* Used classroom materials in a responsible and safe manner
* Used class time productively
* Arrived prepared and met deadlines
* Embraced feedback and suggestions

### Metacognition

Thinking about one’s thought process:

* Showed the ability to reflect on the group’s behavior
* Showed the ability to reflect on personal challenges in terms of skills, behavior, attitude
* Showed the ability to reflect on personal progress in terms of skills, behavior, attitude
* Showed the ability answer questions like, “What new skills or techniques in making and / or coding did you improve? What additional skills in making and / or coding would you like to learn?”

### Coding and Making Skills

* Advanced personal skills and understanding in coding and/or making from where they began to a higher end point
* Sought challenges to skill level
* Demonstrated a high level of proficiency with art, making, or coding
* Demonstrated the ability to explain how code works

### Curricular Content

Project demonstrated mastery of subject area content. This is where one might evaluate the project in terms of specific criteria for the subject area.

### Sample maker’s micro-blog or blog journal reflection questions

1. What was a hurdle with coding, making, or teamwork that you hit today, and how did you try to overcome it? Would you do anything different next time? 
2. Explain an area of coding, making, or collaboration that you might challenge yourself more with.
3. In looking back at the last week or so, what is a moment that is meaningful? Did you make a breakthrough with yourself or with classmates that felt good? 
4. If you could give someone just starting this project / semester a piece of advice, what would it be? 
5. How did you support a classmate in the last day or two? 
6. How has someone supported you in the last day or two? 
7. What is a frustration or annoyance that happens most class periods? What concrete actions do you think you can take to limit it? 
8. Six month ago, did you imagine you would be working on the kinds of problems you’re working on now? 
9. In reviewing your maker’s reflections from this project, where do you see the most growth in yourself? What are you most proud of? 
10. Consider yourself six months or a year from now; what would you like to be learning? How can you make that happen? 

### More blogging ideas 

MakeCode makes it easy to share code, images, and even to embed simulations. Find the “share” button in the upper left, and you can generate a link to share the project, as well as embed codes to embed the project in web pages. In the workspace, right click / control click / or alt click in the gray background, and you’ll get options that include taking a screenshot of the code. All of these features enable students to insert code into writings or even videos of different kinds, and this aids in reflecting on learning. 

The share button offers useful options.

![Project share button](/static/courses/making/evaluation/share-button.jpg)

You can create a simulator showing how the Circuit Playground will behave. 

```sim
let llevel = input.lightLevel()
light.setPixelColor(1, 0xff0000)
light.setPixelColor(4, 0xff0000)
light.setPixelColor(7, 0xff0000)
```

Clicking on the workspace makes a screenshot. 

```blocks
let Pick = 0
let LEDs = 0
input.buttonB.onEvent(ButtonEvent.Click, function () {
    LEDs = 8
    light.graph(LEDs, 10)
})
input.onLightConditionChanged(LightCondition.Dark, function () {
    Pick = Math.randomRange(1, 4)
    if (Pick < 3) {
        LEDs += Math.randomRange(1, 3)
        light.graph(LEDs, 10)
    } else {
        light.showAnimation(light.rainbowAnimation, __internal.__timePicker(2000))
    }
})
light.setAll(0xff0000)
LEDs = 0
```

One of the options to share is to generate embed codes. If your students’ blogging method can take embeds, this is a neat way to share work. 

![Project share dialog](/static/courses/making/evaluation/share-project.jpg)
