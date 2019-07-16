# Logic Lab

![Logic lab header image](/static/cp/learn/logic-lab/logic-lab-header.jpg)

A basic element of understanding is whether something is true or not. Computers and, in fact, all of digital electronics rely on this idea to process information and give results in terms of something being true or false. 

## Logic and computing

The use and study of _logic_ involves finding a new fact by analyzing whether some other facts together can prove to be true. Some facts, or conditions, when looked at together may prove another fact to be true. If the temperature outside is below freezing and you don't have a coat, you will feel cold. If you're not sick, then you will feel well. If you can swim or ride in a boat in water, you will stay afloat.

### Truth statements

By taking some facts and putting them into a logical form, we can make an arithmetic that helps us analyze them and make a conclusion. Using the examples just mentioned, let's turn them into some logical word equations:

* ``Outside temperature is freezing`` **AND** ``I have no coat`` **=** ``I feel cold``
* **NOT** ``sick`` **=** ``I feel well``
* ``I can swim`` **OR** ``I'm in a boat`` **=** ``I'm floating``

You see the AND, NOT, and OR in the example word equations? These are our logical _operators_. Every day we make decisions when we think about one or more facts together using these operators. Sometimes, it's necessary for all facts to be true in order for the conclusion to be true. This is the case when the AND operator is used. When analyzing facts with the OR operator, only on fact needs to be true for the conclusion to be true also.

Making a decision may require more than just one or two facts. When this happens, another operator is needed to combine the facts together to make a conclusion. In the last example word equation, you actually might not be floating if just those two condtions are true. To correctly prove that you're actually floating, you need to state that you're in water too.

* **(**``I can swim`` **OR** ``I'm in a boat``**) AND** ``I'm in water`` **=** ``I'm floating``

To prove that you're floating, the facts that you can either swim or are in a boat must be made into a single fact that is combined with fact that you are also in water. Otherwise, if you're able to swim but still on land, or in a boat that is on the beach, you're not not floating.

### Boolean Algebra

As a way to reduce the conditions, or facts as we've called them, into a form that is more compact, an algebra was invented. Charles Boole made a type of arithmetic (Boolean algebra) that uses symbols for the conditions, the operators, and the result. The conditions considered as variables that have the value either ``true`` or ``false``. the operators like AND, OR, and NOT are single character symbols. If we want to change the statement "I'm happy when it's sunny or after eating a donut" into a Boolean equation, we could start by making the conditions into variables.

* Variable ``A`` = "it's sunny"
* Variable ``B`` = "I've eaten a donut"

The result, then, is a variable called ``Q`` that is true when you're happy and is a value of an operation of ``A`` with ``B``. This operation is OR which is the symbol ``+``.

``Q`` = ``A + B``

The result of ``Q`` is true when either it's sunny or you've had a donut. If other things make you happy, like being on vacation, you could add that to the equation.

* Variable ``C`` = "I'm on vacation"

``Q`` = ``A + B + C``

It could be that you're easy to please and you just have to feel well to be happy. So, your happy when your not sick. We'll use the ``~`` to mean NOT in our equation.

* Variable ``A`` = "I'm sick"

``Q`` = ``~A``

In the situation where all conditions must be true for the result to be true, the conditions use the AND operation. For the sun to shine on you, the sky must be clear and it has to be daytime. We put these two facts together with the AND symbol ``·``.

* Variable ``A`` = "The sky is clear"
* Variable ``B`` = "It's daytime"
* Result ``Q`` = "The sun is shining"

``Q`` = ``A · B``

### Expressions

Sometimes different operations on the same conditions can make equivalent results. For example, if we take the opposite case of the last example where the sun is not shining, the equation for that is:

* Variable ``A`` = "The sky is clear"
* Variable ``B`` = "It's daytime"
* Result ``Q`` = "The sun is NOT shining"

``Q`` = ``~(A · B)``

Also, if the sky isn't clear OR it's not daytime, then the sun isn't shining either:

``Q`` = ``~A + ~B``

We see that the sides with the ``A`` and ``B`` variables in both equations are equivalent to each other too:

``~(A · B)`` = ``~A + ~B``

The logic equation now doesn't have the result of ``Q`` but instead there are two _expressions_ of the same logical result on each side.

## Truth tables

## Sections

* [Logical Expressions](/learnsystem/logic-lab/expressions)
* [Logic Explorer](/learnsystem/logic-lab/explorer)
* [Logic Gates](/learnsystem/logic-lab/logic-gates)
* [Programmable Logic](/learnsystem/logic-lab/programmable)