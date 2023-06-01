window.BENCHMARK_DATA = {
  "lastUpdate": 1685619704168,
  "repoUrl": "https://github.com/mhils/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "26634292+bors[bot]@users.noreply.github.com",
            "name": "bors[bot]",
            "username": "bors[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "451729aef0e787a85011dc608433dea9c663ecee",
          "message": "Merge #3187\n\n3187: release: 0.19.0 r=davidhewitt a=davidhewitt\n\nAs per #3154 I think we're ready to push 0.19.\r\n\r\nI'll put this live on Tuesday evening unless I hear a reason to postpone.\n\nCo-authored-by: David Hewitt <1939362+davidhewitt@users.noreply.github.com>",
          "timestamp": "2023-05-31T15:00:27Z",
          "tree_id": "a0e1f679ba3ff671e187e21d1594aeb60738b7b1",
          "url": "https://github.com/mhils/pyo3/commit/451729aef0e787a85011dc608433dea9c663ecee"
        },
        "date": 1685619689104,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 58719,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 155015,
            "range": "± 4717",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3277851,
            "range": "± 26542",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4885447,
            "range": "± 132816",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3366854,
            "range": "± 52654",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7962771,
            "range": "± 172409",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13398875,
            "range": "± 162061",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7447948,
            "range": "± 681888",
            "unit": "ns/iter"
          },
          {
            "name": "mapping_from_dict",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2021768,
            "range": "± 20034",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1425383,
            "range": "± 112060",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1188770,
            "range": "± 41816",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1074672,
            "range": "± 41219",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_list",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3502,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3167,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "set_new",
            "value": 2013805,
            "range": "± 24841",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2666652,
            "range": "± 15776",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9148132,
            "range": "± 91217",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 5088430,
            "range": "± 29052",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6542185,
            "range": "± 116933",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1376245,
            "range": "± 3099",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1416209,
            "range": "± 141283",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 892550,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 800502,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "sequence_from_tuple",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new_list",
            "value": 229562,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_to_list",
            "value": 153045,
            "range": "± 850",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}