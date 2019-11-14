export const anamnese = {
  id_student,
  persona_background_life_story: {
    preExisting_disease_before_pregnancy : {
      yes,
      which,
    },
    conception: {
      son: ['biological', 'adoptive'],
      desired,
      wanted_to_get_pregnant,
      disturbed_the_life_of_the_couple_or_a_parent,
      how_was_the_pregnancy,
      has_prenatal: {
        yes,
        antenatal_care,
        init_from_how_many_weeks,
        diseases: {
          yes,
          which,
          symptoms : {
            yes,
            which,
          }
        },
        do_all_exams,
        any_change_exams: {
          yes,
          which,
          how_was_the_birth: ['normal', 'CESAREA', 'FORCEPS']
        },
        hospital_name,
        premature: {
          yes,
          with_how_many_months,
        },
        weight,
        height,
        reaction,
        wept,
        intercurrences_at_birth_time,
        appear,
        blood_transfusion,
        jaundice,
        pediatrician_name,
        accommodation: ['pediatric_icu', 'nursery', 'mother_accommodation'],
        received_high_together_with_mother: {
          no,
          why,
        },
        some_sequence_syndrome_trauma,
      }
    },
    development: {
      alimentation: {
        fucked_in_chest,
        good_suction,
        good_chew,
        good_swallowing,
        choked_lot,
        beginning_wood_how_age,
        well_accepted_pas_for_solid,
        well_accepted_salt_food,
        how_is_food_today,
        until_when_you_were_food_help,
        today_has_time_food,
        eat_fast,
        chews_well,
        eat_together,
      },
      spycinian_and_hygiene_control: {
        which_age_controlled_the_urine,
        day,
        night,
        what_age_has_stopped_using_diapers,
        which_age_controlled_the_floor,
        there_was_difficulty_in_these_controls,
        what_family_attitude,
        take_bath_alone,
        make_your_hygiene_alone,
      },
      psychomotor_development: {
        stayed_in_the_enclosure,
        screwed,
        age_who_started_walking,
        who_taught_to_walk,
        how_learned_to_walk,
        he_was_brave_when_he_climbed_a_ladder,
        it_was_brave_to_explore_a_new_space,
        it_was_insecure,
        with_whom_he_walked_best,
        how_coordination_of_final_movements_evolved,
        how_great_muscles_evolved,
        tie: {
          yes,
          hand: ['left-handed', 'destroy'],
        },
        cut_with_scissors: {
          yes,
          hand: ['left-handed', 'destroy'],
        },
      },
      language: {
        how_old_did_he_start_talking,
        with_whom_he_talked_more,
        talked_if_to_repeat,
        changed_the_letters: {
          yes,
          which_are
        },
        talked_very_wrong
      }
    }
  },
  today: {
    messy,
    swim,
    agitated,
    skating,
    ride,
    ride_a_bike_without_support,
    climbs_trees,
    language: {
      changed_the_letters: {
        yes,
        which_are
      },
      speak_very_anxious,
      speak_in_a_way_everyone_understands,
      give_an_example_how_he_speaks: {
        yes,
        can_give_a_scrap,
      },
      make_a_purchase_alone,
      how_to_tell_a_story: {
        yes,
        give_an_example,
        has_start_middle_end,
      },
    },
    sleep: {
      sleep_only: {
        yes,
        with_how_many_people,
      },
      fearing_to_sleep_alone,
      when_agree_go_to_parents_bed,
      use_some_object_to_sleep: {
        yes,
        which,
      },
      urinary_in_bed,
      how_many_hours_do_sleep,
      agrees_at_night: {
        yes,
        how: ['crying', 'creeped_out'],
      },
      speak,
      shout,
      grit_the_teeth,
      sit_on_bed,
      move_on_bed,
      perspire,
      slobber,
      nightmare,
      insomnia,
      sleepwalk,
      sleeping_in_the_dark,
      when_sleep_makes_noise_in_the_mouth_or_nose,
    },
    clinical_history: {
      had_or_have_some_of_these_diseases: {
        MEASLES,
        MUMPS,
        CHICKENPOX,
        BRONCHITIS,
        ALLERGY,
        RUBELLA,
        MENINGITIS,
        COQUELUCHE,
        ASTHMA,
        Hospitalizations,
        HEPATITIS,
        PNEUMONIA,
        SURGERIES,
        OTHER_DISEASES,
      },
      treatments_carried_out: {
        yes,
        which,
      },

    },
    handling_and_tiks: {
      used_the_pacifier_until_age,
      sucked_finger,
      rip_out_hair,
      beat_head_on_the_wall,
      presents_others_tips_or_handles,
      what_family_attitude,
      take_or_taken_some_medication_systemically: {
        yes,
        which,
      },
      there_were_complications_or_sequels_of_any_disease,
      presented: {
        HIGH_FEVER,
        FIRE_LOSS,
        BITCHED_ON_HEAD,
        Blackouts,
        HEADACHES,
        HEMORRAGIES,
      },
      what_is_the_duration_and_frequency,
      have_already_done_surgeries: {
        yes,
        which,
        need_anesthesia,
      },
    },
    sexuality: {
      sexual_curiosity: {
        yes,
        which_are,
      },
      askes_many_questions,
    },
    sensory_disorders: {
      vision_problem,
      have_consulted_an_ophthalmologist,
      wear_glasses: {
        yes,
        why,
      },
      already_had_otites: {
        yes,
        when,
        frequent,
      },
      has_already_done_audiometry: {
        when,
        why,
        what_result,
      },
      made_some_of_these_exams: {
        ELETROPHALOGRAM,
        COMPUTED_TOMOGRAPHY,
        MAGNETIC_RESONANCE
      }
    },
    stimulation: {
      child_has_access_to: {
        pedagogical_toys,
        games,
        magazines,
        books,
        electronic_toys,
      },
      activity_participates: {
        music,
        dance,
        sport: {
          yes,
          what
        },
      },
      negative_situations_experienced_by_child: {
        birth_brother,
        changes,
        dead: {
          yes,
          who,
        },
        separation,
        unemployment
      },
    },
    family_past_present_interferences_connections_pathological_frames: {

    }
  }
}
