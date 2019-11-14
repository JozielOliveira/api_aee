export const referral = {
  name,
  date_birth,
  mother: {
    name,
    phone,
  } ,
  father: {
    name,
    phone
  },
  phone_guardian,
  school: {
    grade,
    school,
    teacher,
  },
  address: {
    zip_code,
    state,
    city,
    neighborhood,
    street
  },
  other: {
    rg,
    cpf,
    register_sus,
    nationality,
  },
  reason_for_referral  : {
    shift,
    has_medical_report,
    cid,
    learning_disorders,
    behavior_disorders,
    language_disorders,
    cognitive_deficit,
    interventions_carried_out_at_school,
    socioemotional_skills: {
      empathy,
      happiness,
      self_esteem,
      ethic,
      patience,
      self_knowledge,
      confidence,
      autonomy,
      responsibility,
      creativity
    },
    school_skills: {
      oral_communication: {
        report_simple_events_understandably,
        remember_to_give_errands_after_about_ten_minutes,
        communicate_with_others_using_nonOral_language,
        uses_oral_language_to_communicate,
      },
      read_write: {
        knows_the_letters_of_the_alphabet,
        recognizes_the_difference_between_letters_and_numbers,
        knows_simple_syllables,
        listen_to_stories_carefully,
        can_understand_and_retell_stories,
        play_games_meeting_the_rules,
        uses_appropriate_vocabulary_for_age_group,
        can_spell,
        can_write_simple_words,
        can_sign_name,
        write_addresses,
        write_short_texts_or_tickets,
        write_under_dictation,
        reads_comprehensively_short_texts,
        read_and_follow_printed_instructions,
        uses_reading_ability_to_know_information,
      },
      mathematical_reasoning: {
        relates_quantity_to_number,
        solves_simple_problems,
        recognizes_product_price_values,
        identify_the_value_of_money,
        differentiates_banknotes_and_coins,
        can_pool_money_to_form_values,
        gives_change_when_needed_in_classroom_activities,
        has_concepts: {
          color,
          size,
          geometric_shapes,
          right_left,
          predecessor_successor
        },
        recognizes_time_measurements: {
          temporal_location,
          identify_days_of_the_week,
          recognize_hours : {
            recognize_hours_on_digital_clock,
            recognizes_inaccurate_hours_on_digital_clock,
            recognize_exact_hours_on_hands_watches,
            recognizes_inaccurate_hours_on_hands_watches,
            associates_schedules_with_events,
          },
        },
        mathematical_concepts: {
          addition_and_subtraction: {
            solve_mathematical : {
              with_support_of_concrete_material,
              without_support_of_concrete_material,
            }
          }
        },
        show_curiosity_question_about_how_things_work,
        likes_games_involving_logic,
        arrange_pictures_in_logical_order,
      },
      computation_school: {
        use_computer_with_relative_autonomy,
        can_use_computer_and_internet,
      },
    },
    note: {
      cognitive_development,
      socio_relational,
      difficulties_found,
      possibilities_observed,
      time_before_after_current_school,
      consolidated_learning,
      objectives_student
    }
  }
}
