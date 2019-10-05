class CreateEquations < ActiveRecord::Migration[5.2]
  def change
    create_table :equations do |t|
      t.string :name
      t.string :equation_content
      t.references :field, foreign_key: true
      t.timestamps
    end
  end
end
