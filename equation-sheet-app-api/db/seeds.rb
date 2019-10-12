# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

em = Field.create(name: "Electrodynamics", description: "The branch of mechanics concerned with the interaction of electric currents with magnetic fields or with other electric currents.")
qm = Field.create(name: "Quantum Mechanics", description: "The branch of mechanics that deals with the mathematical description of the motion and interaction of subatomic particles, incorporating the concepts of quantization of energy, wave-particle duality, the uncertainty principle, and the correspondence principle.")
sr = Field.create(name: "Special Relativity", description: "The generally accepted and experimentally confirmed physical theory regarding the relationship between space and time.")
ch = Field.create(name: "Chemistry", description: "A branch of science that involves the study of the composition, structure and properties of matter.")
bi = Field.create(name: "Biology", description: "The branch of natural science concerned with the study of life and living organisms, including their structure, function, growth, origin, evolution, distribution, and taxonomy.")
th = Field.create(name: "Thermodynamics", description: "The branch of physical science that deals with the relations between heat and other forms of energy (such as mechanical, electrical, or chemical energy), and, by extension, of the relationships between all forms of energy.")
int = Field.create(name: "Integrals", description: "Insert any helpful integrals here.")
der = Field.create(name: "Derivatives", description: "Insert any helpful derivatives here.")
cm = Field.create(name: "Classical Mechanics", description: "The study of the motion of bodies (including the special case in which bodies remain at rest) in accordance with the general principles first enunciated by Sir Isaac Newton in his Philosophiae Naturalis Principia Mathematica (1687), commonly known as the Principia.")

# schrodinger = Equation.create(name:  "Schrodinger Equation") #equation_content: "ih∂/∂tΨ(r,t)=[-(h^2/2m)∇^2+V(r,t)]Ψ(r,t)")
# newton = Equation.create(name:  "Newton") #equation_content: "F=ma")
# maxwell = Equation.create(name:  "Faraday's Law")# equation_content: "∇xE = -dB/dt")
# einstein = Equation.create(name:  "Einstein's Field Equation") #equation_content: "R_uv-1/2Rg_uv+Λg_uv = 8πG/c^4T_uv")